import React, { useCallback, useRef, useState } from 'react';
export default function Phone() {
  const codeLoading = useRef(false);

  const codeTimer = useRef(null);
  const codeDom = useRef(null);
  // 倒计时
  const countDown = useCallback(() => {
    codeLoading.current = true;
    let time = 5;
    codeTimer.current = setInterval(() => {
      try {
        time--;
        codeDom.current.innerHTML = `${time}S`;
        if (time < 1) {
          clearInterval(codeTimer.current);
          codeDom.current.innerHTML = '发送验证吗';
          codeLoading.current = false;
        }
      } catch (e) {}
    }, 1000);
  }, []);
  const handlesend = () => {
    if (codeLoading.current) {
      return;
    }
    codeLoading.current = true;
    countDown();
    console.log('sss');
  };
  return (
    <div onClick={handlesend} ref={codeDom}>
      {/* {codeDom} */}
      发送验证码
    </div>
  );
}
