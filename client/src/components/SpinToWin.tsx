import React, { useState } from 'react';

interface SpinToWinProps {
  chance: number;
}

export default function SpinToWin({ chance }: SpinToWinProps) {
  const percentage = Math.max(0, Math.min(100, chance));
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>('null');
  const [transition, setTransition] = useState('transform 2s ease-in');

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    const fastPart = 1080;
    const slowPart = 180 + Math.floor(Math.random() * 90);

    setTransition('transform 2s ease-in');
    const firstAngle = angle - fastPart;
    setAngle(firstAngle);

    setTimeout(() => {
      setTransition('transform 1s ease-out');
      setAngle(firstAngle - slowPart);
    }, 2000);

    setTimeout(() => {
      const win = Math.random() * 100 < chance;
      setResult(win ? '🎉 Ai câștigat!' : 'Nu ai avut noroc.');
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="p-6 ml-4 rounded flex flex-col text-center relative left-[50%] translate-x-[-50%] w-full">
      <div className="relative aspect-square w-full left-[50%] translate-x-[-50%]">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#444"
            strokeWidth="2.2"
          />
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#9f0712"
            strokeWidth="2.2"
            strokeDasharray={`${percentage} ${100 - percentage}`}
            strokeLinecap="round"
          />
        </svg>

        {/* Punct rotativ responsive */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: transition,
          }}
        >
          <svg
  width="15%"
  viewBox="0 0 63 61"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{
    transform: 'translateY(-380%) rotate(52deg)',
  }}
>
  <g filter="url(#filter0_d_26_2470)">
    <path d="M43.407 41.6946C43.6326 41.6125 43.837 41.481 44.0056 41.3094C44.1743 41.1378 44.303 40.9303 44.3826 40.7017C44.4623 40.4731 44.4909 40.229 44.4665 39.9867C44.4422 39.7444 44.3653 39.5098 44.2415 39.2997L31.1657 15.6118C30.4959 14.4766 28.8569 14.5283 28.2865 15.7028L25.2331 21.7296L21.4397 18.8977C19.2581 17.2693 17.0702 17.5921 15.4848 19.7774C13.8993 21.9627 14.2458 24.178 16.4273 25.8065L20.2073 28.6279L15.5121 33.3102C14.5761 34.212 15.0146 35.8151 16.2817 36.1264L42.4674 41.7453C42.7799 41.8217 43.1064 41.8041 43.407 41.6946Z" fill="white" />
  </g>
  <defs>
    <filter id="filter0_d_26_2470" x="0.00219727" y="0.290039" width="62.9728" height="60.002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dx="2" dy="2" />
      <feGaussianBlur stdDeviation="8.25" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_2470" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_2470" result="shape" />
    </filter>
  </defs>
</svg>


        </div>

        {/* Text procent */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-xl font-semibold">
          <p className="text-2xl">{percentage.toFixed(1)}%</p>
          <p className="text-[16px] text-gray-400">Șansă de câștig</p>
        </div>
      </div>
      <div className="p-[1px] mx-auto mt-10 rounded-lg bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] h-fit w-fit transition duration-200">
        <button
          onClick={spin}
          disabled={spinning}
          className="bg-[rgb(58,58,58)] flex justify-center items-center hover:bg-[rgb(68,68,68)] text-white relative left-[50%] translate-x-[-50%] text-sm font-light w-fit px-8 py-2 rounded-md transition duration-200 cursor-pointer"
        >
          <svg width="22" height="20" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.32 2.77048C25.8275 3.11177 26.1768 3.63812 26.2912 4.23374C26.4057 4.82935 26.2757 5.44544 25.93 5.94648C25.5844 6.44751 25.0512 6.79244 24.448 6.90539C23.8447 7.01834 23.2207 6.89006 22.7132 6.54876C20.5759 5.11422 18.0138 4.42714 15.435 4.59698C12.8563 4.76682 10.4093 5.78381 8.48392 7.48594C6.55851 9.18807 5.26543 11.4774 4.81068 13.9893C4.35592 16.5011 4.76566 19.091 5.97462 21.3462C7.18357 23.6015 9.1222 25.3925 11.4816 26.4338C13.8411 27.4751 16.4856 27.7069 18.994 27.0922C21.5023 26.4775 23.7302 25.0517 25.3226 23.042C26.915 21.0322 27.7804 18.5541 27.781 16.0025C27.781 15.3963 28.0249 14.8149 28.459 14.3862C28.8932 13.9576 29.482 13.7168 30.096 13.7168C30.71 13.7168 31.2989 13.9576 31.7331 14.3862C32.1672 14.8149 32.4111 15.3963 32.4111 16.0025C32.4106 19.575 31.199 23.0446 28.9695 25.8584C26.74 28.6723 23.6208 30.6685 20.1088 31.5289C16.5969 32.3894 12.8943 32.0647 9.59098 30.6065C6.28766 29.1484 3.57365 26.6406 1.88138 23.4828C0.189112 20.3251 -0.38406 16.699 0.253186 13.1822C0.890433 9.66553 2.70144 6.46056 5.39765 4.07795C8.09387 1.69535 11.5202 0.272197 15.1307 0.0352452C18.7412 -0.201706 22.3281 0.761176 25.32 2.77048Z" fill="white" />
            <path d="M24.3987 21.7301C24.1426 21.8919 23.8567 22.0023 23.5574 22.055C23.258 22.1077 22.9511 22.1016 22.6541 22.0372C22.3571 21.9728 22.0759 21.8513 21.8264 21.6795C21.577 21.5078 21.3643 21.2893 21.2005 21.0364C21.0366 20.7835 20.9248 20.5012 20.8714 20.2057C20.818 19.9101 20.8241 19.6071 20.8894 19.3139C20.9546 19.0206 21.0777 18.743 21.2517 18.4967C21.4256 18.2505 21.6469 18.0405 21.9031 17.8787L29.9642 12.7884C30.4814 12.4724 31.1037 12.37 31.6967 12.5034C32.2896 12.6367 32.8057 12.9951 33.1332 13.501C33.4607 14.007 33.5735 14.6198 33.447 15.2072C33.3206 15.7945 32.9652 16.3091 32.4576 16.6398L24.3987 21.7301Z" fill="white" />
            <path d="M36.8168 21.511C37.0532 22.0622 37.0611 22.6829 36.8389 23.2398C36.6167 23.7967 36.1821 24.2453 35.6285 24.4893C35.0749 24.7332 34.4464 24.7531 33.8782 24.5445C33.31 24.3359 32.8473 23.9156 32.5895 23.3739L29.0983 15.6482C28.9675 15.3731 28.8935 15.0751 28.8807 14.7714C28.8679 14.4678 28.9165 14.1647 29.0238 13.8799C29.131 13.595 29.2947 13.3342 29.5053 13.1125C29.7159 12.8909 29.9691 12.7129 30.2502 12.5891C30.5312 12.4652 30.8345 12.398 31.1422 12.3912C31.4499 12.3844 31.7559 12.4383 32.0423 12.5497C32.3287 12.6611 32.5897 12.8277 32.81 13.0399C33.0304 13.2521 33.2057 13.5055 33.3257 13.7853L36.8168 21.511Z" fill="white" />
          </svg>

          <p className="ml-3">{spinning ? 'Se învârte...' : 'Demo Spin'}</p>
        </button>
      </div>
     
      <p className="mt-4 text-center text-lg font-semibold" style={{ opacity: result === 'null' ? 0 : 1 }}>
        {result}
      </p>
      
    </div>
  );
}
