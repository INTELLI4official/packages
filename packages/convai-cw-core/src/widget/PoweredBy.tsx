import { useWidgetConfig } from "../contexts/widget-config";
import { clsx } from "clsx";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

export function PoweredBy() {
  const config = useWidgetConfig();

  if (config.value.disable_banner) { 
    return null; 
  }

  const ic_pos = config.value.ic_pos;
  const ic_pos_mob = config.value.ic_pos_mob;

  return (
    <>
    {ic_pos === "rb1" && (
      <>
      {/* <p
        className={clsx(
          "whitespace-nowrap [line-height:var(--el-overlay-padding)] text-[10px] px-3",
          config.value.placement.startsWith("top")
            ? "-translate-y-[calc(var(--el-overlay-padding))]"
            : "translate-y-[calc(var(--el-overlay-padding))]"
        )}
      >
        <span className="opacity-100 text-[14px]">Powered by ElevenLabs</span>{" "}
        <a
          href={
            config.value.override_link ||
            "https://elevenlabs.io/conversational-ai"
          }
          className="underline cursor-pointer pointer-events-auto focus-visible:outline-none opacity-30 hover:opacity-50 focus-visible:opacity-100 focus-visible:underline-offset-2"
          target="_blank"
        >
          Agents
        </a>
      </p> */}

      <div className={clsx(
        "flex px-3 pb-[3px]",
        config.value.placement.startsWith("top")
            ? "-translate-y-[calc(var(--el-overlay-padding))]"
            : "translate-y-[calc(var(--el-overlay-padding))]"        
      )}>
        <div className="flex">
          <p className="text-[13px] [color:black]">Powered by </p>
          <p className="text-[15px] [color:black] ml-[3px] -mt-[0px]"> INTELLI4 </p>
        </div>

        <div className="flex">
          <a
            href={
              config.value.override_link ||
              "https://intelli4.co"
            }
            className=" cursor-pointer pointer-events-auto "
            target="_blank"
          >
            <HiOutlineArrowTopRightOnSquare className="opacity-100 text-[13px] [color:black] ml-[5px] mt-[3.5px]" />
            
          </a>          
        </div>

      </div>
      </>

    )}

    </>


  );
}
