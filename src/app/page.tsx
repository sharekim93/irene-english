"use client";

export default function Home() {
  // const contactClick = () => {
  //   location.href = `tel:010-5333-4383`;
  // };

  return (
    <>
      <div className={`w-full my-10 mx-2`}>
        <h1 className={`font-gothic text-foreground font-bold text-4xl`}>
          석성초 삼성영어 셀레나 아이린 교실
        </h1>
        <hgroup className="my-2">
          <p>안녕하세요 석성초 삼성영어 셀레나 아이린 교실입니다</p>
        </hgroup>
        {/* <button
          className="border-1 border-gray-400"
          onClick={() => contactClick()}
        >
          문의전화
        </button> */}
      </div>
    </>
  );
}
