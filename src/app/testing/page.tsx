import Header from '@/components/header'
import React from 'react'

const page = () => {
  return (
    <>
        <Header />
        <div className="flex flex-col pb-9 relative w-full">
            <div className="absolute left-8 top-6 block overflow-hidden">
                <h1 className="introduction-title">TO START ANALYSIS</h1>
            </div>
            <div className="flex justify-around my-auto pb-16 pt-48">
                <button className="access-btn relative">
                    <span className="dotted-square dotted-square__expanded dotted-square__animation"></span>
                    <span className="access-btn__center">
                        <span className="absolute access-btn__icon">
                            <svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="68.001" cy="68" r="57.786" stroke="#1A1B1C"></circle><circle cx="68" cy="68" r="51" fill="#1A1B1C"></circle><path d="M100.668 35.412C92.315 27.038 80.763 21.857 68 21.857a46.39 46.39 0 0 0-8.64.808c4.774 7.898 22.22 35.59 25.58 40.515.653.957 1.813-.944 8.838-14.487l6.89-13.281ZM25.088 51.004c5.493-13.858 17.506-24.422 32.253-27.91 1.746 2.619 5.081 7.793 8.726 13.555l9.26 14.642H48.886c-12.76 0-20.217-.083-23.798-.287ZM31.87 96.703A45.947 45.947 0 0 1 21.856 68c0-5.199.86-10.197 2.445-14.86h14.865c17.385 0 17.78.027 17.16 1.19-1.232 2.304-19.503 33.932-24.458 42.373ZM76.964 113.273c-2.9.57-5.897.87-8.964.87-13.808 0-26.2-6.066-34.656-15.678 1.827-4.06 6.585-12.533 14.828-26.454.775-1.31 1.56-2.23 1.745-2.045.185.184 6.687 10.554 14.45 23.042l12.597 20.265ZM111.529 83.348c-5.157 14.625-17.476 25.872-32.745 29.528-4.206-6.487-18.172-28.92-18.172-29.267 0-.143 12.07-.261 26.82-.261h24.097ZM101.902 36.697C109.5 44.922 114.143 55.919 114.143 68a46.11 46.11 0 0 1-2.199 14.115H96.597c-9.973 0-18.132-.15-18.132-.335 0-.38 19.972-38.764 23.437-45.083Z" fill="#FCFCFC"></path></svg>
                        </span>
                        <span className="access-btn__text access-btn__left">ALLOW A.I. TO SCAN YOUR FACE</span>
                    </span>
                </button>
                <button className="access-btn relative">
                    <span className="dotted-square dotted-square__expanded dotted-square__animation"></span>
                    <span className="access-btn__center">
                        <span className="absolute access-btn__icon">
                            <svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="68.001" cy="68" r="57.786" stroke="#1A1B1C"></circle><circle cx="68" cy="68" r="50" fill="#FCFCFC" stroke="#1A1B1C" strokeWidth="2"></circle><path d="M78.321 68c7.042 0 12.75-5.708 12.75-12.75S85.363 42.5 78.321 42.5c-7.041 0-12.75 5.708-12.75 12.75S71.28 68 78.321 68Z" fill="#1A1B1C"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 68c0 3.96.451 7.815 1.306 11.516C23.526 102.136 43.794 119 68 119c26.867 0 48.882-20.776 50.856-47.138A51.96 51.96 0 0 0 119 68c0-28.166-22.834-51-51-51S17 39.834 17 68Zm18.337-.274L19.382 78.77A49.962 49.962 0 0 1 18.215 68c0-27.496 22.29-49.786 49.786-49.786 27.496 0 49.786 22.29 49.786 49.786 0 1.541-.07 3.066-.207 4.572l-34.634 19.24a7.286 7.286 0 0 1-7.91-.54l-31.18-23.385a7.286 7.286 0 0 0-8.518-.161Z" fill="#1A1B1C"></path></svg>
                        </span>
                        <span className="access-btn__text access-btn__right">ALLOW A.I. ACCESS TO GALLERY</span>
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}

export default page