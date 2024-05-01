"use client";
import Image from "next/legacy/image";
import DropDown from "../Dropdown";
import ArrowUp from "@/images/arrow-up.svg";
import { useState } from "react";
import LocationPin from "@/images/location-pin.svg";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import {
//   selectSearchFilter,
//   setSearchFilter,
// } from "@/redux/reducers/searchSlice";

export const cityData = new Map([
  ["ALL", "Tất cả thành phố"],
  ["HCM", "Ho Chi Minh"],
  ["HN", "Hanoi"],
  ["DN", "Da Nang"],
  // ["ALL", "Các thành phố khác"],
]);

const CityOption = () => {
  // const searchFilter = useAppSelector(selectSearchFilter);
  // const [currentKey, setCurrentKey] = useState(
  //   searchFilter.location || Array.from(cityData.keys())[0]
  // );
  // const [isFocusing, setIsFocusing] = useState<boolean>(false);
  // const dispatch = useAppDispatch();
  // const onChangeCityOption = (key: string) => {
  //   setCurrentKey(key);
  //   dispatch(setSearchFilter({ location: key }));
  // };
  // const onClickCityOption = () => {
  //   setIsFocusing(!isFocusing);
  // };
  // const onBlurCityOption = () => {
  //   setTimeout(() => {
  //     setIsFocusing(false);
  //   }, 200);
  // };
  return <></>;
  // return (
  //   <div className="group relative  ">
  //     <div className="h-full bg-white min-h-[56px] flex items-center md:justify-between gap-x-2 py-[6px] px-4 rounded-lg border border-dropdown-border group-hover:border-[#FF533A] min-w-[280px]">
  //       <div className="flex item-center shrink-0">
  //         <Image
  //           src={LocationPin}
  //           width={18}
  //           height={18}
  //           alt="location"
  //           className=""
  //         />
  //       </div>
  //       <button
  //         type="button"
  //         onClick={onClickCityOption}
  //         onBlur={onBlurCityOption}
  //         className="flex items-center justify-between w-full"
  //       >
  //         <span className="text-primary-black text-left text-lg whitespace-nowrap group-hover:text-primary-red">
  //           {cityData.get(currentKey)}
  //         </span>
  //         <div
  //           className={`${
  //             isFocusing && "rotate-180"
  //           } transition-all flex items-center w-6 h-6 shrink-0`}
  //         >
  //           <div className="flex item-center shrink-0">
  //             <Image src={ArrowUp} alt="arrow" />
  //           </div>
  //         </div>
  //       </button>
  //     </div>
  //     <DropDown
  //       itemList={cityData}
  //       currentItem={currentKey}
  //       handleClickDropdownItem={onChangeCityOption}
  //       isFocusing={isFocusing}
  //     />
  //   </div>
  // );
};

export default CityOption;
