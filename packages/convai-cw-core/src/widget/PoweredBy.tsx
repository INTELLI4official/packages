import { useWidgetConfig } from "../contexts/widget-config";
import { clsx } from "clsx";

export function PoweredBy() {
  const config = useWidgetConfig();

  if (config.value.disable_banner) {
    return null;
  }

  return (
    <div className="text-center text-white [background-color:var(--color-intelli4-base)]  translate-y-[calc(var(--el-overlay-padding))] [width:250px] [margin-bottom:5px]">
    <p
      // className={clsx(
      //   "whitespace-nowrap  [line-height:var(--el-overlay-padding)] text-[10px] px-3",
      //   config.value.placement.startsWith("top")
      //     ? "-translate-y-[calc(var(--el-overlay-padding))]"
      //     : "translate-y-[calc(var(--el-overlay-padding))]"
      // )}
      className={clsx( "whitespace-nowrap  text-[15px] text-center" )}      
    >
      <span className="opacity-100 [color:var(--txt-white)]">INTELLI4</span>{" "}
      <a
        href={
          config.value.override_link ||
          "https://intelli4.co"
        }
        // className="underline cursor-pointer pointer-events-auto focus-visible:outline-none opacity-30 hover:opacity-50 focus-visible:opacity-100 focus-visible:underline-offset-2"
        className="text-[18px] [color:var(--txt-white)] [margin-left:2px] cursor-pointer pointer-events-auto focus-visible:outline-none opacity-100 hover:opacity-80 focus-visible:opacity-100 focus-visible:underline-offset-2"
        target="_blank"
      >
        ↗
      </a>
    </p>
    </div>
  );
}
