import React, { useEffect, useState } from 'react'
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
//components
import DynamicInputs from '@/app/_components/inputs/DynamicInputs'
import Loading from '@/src/app/_components/Loading';
import StepController from '../../_components/StepController'
//services
import getJob from '@/services/category_kg_local/getJob'
import getRequestsJob from '@/services/core_kg_local/getRequestsJob'
//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadingHandler } from '@/src/redux/features/layout/layoutConfigSlice';

function Step1({ currentStep, setCurrentStep, stepInformation }) {
  const [loadingPage, setLoadingPage] = useState(true);
  const [jobList, setJobList] = useState(true);
  const [jobTypeList, setJobTypeList] = useState([]);
  const dispatch = useDispatch();
  const jobType = useSelector(state => state.staticVariable.type_job);
  const information = [
    {
      title: 'تعمیرات اساسی',
      description: 'در این سرویس خدمات بازسازی ساختمان قابل ارائه است. متخصصانی که تمایل به گرفتن کار بازسازی دارند در این سرویس قرار می گیرند.'
    },
    {
      title: 'پیمانکاران ساخت',
      description: 'در این سرویس خدمات ساختمانی در قالب پیمانکاری ارائه می شود. افراد حقیقی و حقوقی که امکان گرفتن پروژه به صورت پیمانکاری را دارند، در این سرویس قرار می گیرند.'
    },
    {
      title: 'تامین نیروی فنی و اجرایی آیتمی و روزمزد',
      description: 'در این سرویس ۰ تا ۱۰۰ خدمات ساختمانی قابل ارائه است. متخصص این سرویس به ۲ صورت روزمزد و آیتمی (مترمربع، مترطول، عدد و غیره) می تواند پاسخگوی درخواست های مشتری باشد.'
    },
    {
      title: 'خدمات فوری',
      description: 'این سرویس مخصوص امور اورژانسی ساختمان مانند ترکیدگی لوله، رفع نشتی آب، قفل و کلید و غیره است. </n> بعد از ثبت درخواست متخصص در کمترین زمان می بایست پاسخگوی مشتری باشد.'
    },
    {
      title: 'خرده کاری',
      description: 'این سرویس مخصوص بر طرف کردن ایرادات کوچک در ساختمان است. متخصص این سرویس می بایست توانایی رفع ایرادات، نواقص و تغییرات جزیی در ساختمان را دارا باشد.'
    }
  ]

  //validation inputs
  const validationSchema = Yup.object({
    job: Yup.string()
      .required(
        "لطفا نام خانوادگی خود را به درستی وارد کنید."
      ),
    requestType: jobTypeList ? Yup.string().required("لطفا نام خانوادگی خود را به درستی وارد کنید.") : Yup.string(),
  });

  //input handler
  const formik = useFormik({
    initialValues: {
      job: "",
      requestType: ""
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('services', JSON.stringify({ job: values.job, requestType: values.requestType }))
      setCurrentStep(currentStep + 1)
    }
  });

  //get list of job
  useEffect(() => {
    getJob()
      .then(res => {
        const createdList = res.data.data.map((item) => {
          return { id: item.id, text: item.name }
        })

        setJobList(createdList)
      })
      .catch(() => {
      })
      .finally(() => {
        setLoadingPage(false)
      })
  }, [])

  //get list of requestType
  useEffect(() => {
    if (formik.values.job) {
      dispatch(loadingHandler(true))
      getRequestsJob(formik.values.job)
        .then(res => {
          const listOfJobType = []
          res.data.data.forEach((item) => {
            jobType.forEach((jobItem) => {
              jobItem.id === item.requestType && listOfJobType.push(jobItem)
            })
          })

          setJobTypeList(listOfJobType)
        })
        .catch(() => {
        })
        .finally(() => {
          dispatch(loadingHandler(false))
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.job])

  return (
    <div className='text-sm font-medium pt-5'>
      {loadingPage && <Loading />}
      <div className='mb-5'>
        در این مرحله سرویس که می خواهید در این ضمینه به شما کار ارجاع شود را انتخاب کنید.
      </div>
      {jobList.length &&
        <DynamicInputs
          inputType={'dropDown'}
          list={jobList}
          title={'سرویس'}
          state="1"
          required={true}
          className="my-2 w-full mb-5"
          placeholder={'به طور مثال : نقاشی'}
          id={'job'}
          name={'job'}
          formik={formik}
        />
      }
      {jobTypeList.length &&
        <>
          <div className='text-cf-300 mb-5'>
            نوع سرویس های این خدمت را مشخص کنید تفاوت آنها را می توانید در قسمت پایین  این قسمت مطالعه کنید.
          </div>

          <DynamicInputs
            inputType='dropDown'
            list={jobTypeList}
            title='نوع سرویس'
            state={1}
            required={true}
            className="my-2 w-full mb-5"
            placeholder='نیروی خرده کاری'
            id='requestType'
            name='requestType'
            formik={formik}
          />
        </>
      }

      {information.map((item, i) => (
        <div key={i}>
          <div className='font-bold text-xs md:text-sm text-primary-500 mb-2'>{item.title}</div>
          <div className='font-bold text-xs md:text-sm text-cf-300 mb-4'>{item.description}</div>
        </div>
      ))}

      <StepController
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onsubmit={formik.submitForm}
        allSteps={stepInformation.length}
      />
    </div>
  )
}

export default Step1