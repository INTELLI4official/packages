import { useConversation } from "../contexts/conversation";
import { useTextContents } from "../contexts/text-contents";
import { clsx } from "clsx";
import { SizeTransition } from "../components/SizeTransition";
import { Avatar } from "../components/Avatar";
import { ExpandableTriggerActions } from "./ExpandableTriggerActions";
import { ExpandableProps } from "./Trigger";

import { useWidgetConfig } from "../contexts/widget-config";

export function FullExpandableTrigger({
  expanded,
  className,
  ...rest
}: ExpandableProps) {
  const { isDisconnected } = useConversation();
  const text = useTextContents();

  const config = useWidgetConfig();
  
  let icClassName;
  if (config.value.ic_pos === "rb1"){
    icClassName = "flex-col justify-end items-end"
  }


  return (

    // <div
    //   className={clsx(
    //     "transition-[border-radius] flex flex-col p-2",
    //     !expanded.value && isDisconnected.value ? "rounded-sheet" : "rounded-compact-sheet",
    //     className
    //   )}
    //   {...rest}
    // >
    //   <SizeTransition
    //     visible={!expanded.value && isDisconnected.value}
    //     className="p-1 !min-w-60"
    //   >
    //     <div className="flex items-center gap-2">
    //       <Avatar />
    //       <div className="text-sm max-w-64">{text.main_label}</div>
    //     </div>
    //   </SizeTransition>
    //   <div className="flex items-center">
    //     <ExpandableTriggerActions expanded={expanded} />
    //   </div>
    // </div>    

    <>
    {config.value.ic_pos === "rb1" && (
      <div className="!flex flex-col absolute w-full h-full  justify-end items-end ">
        <div className="flex-col w-[420px] mr-[0px] ">

          <div
            className={clsx( 
              "pl-[0px] pr-[0px] pt-[0px] pb-[0px] [background-color:black] [border-top-left-radius:0px] [border-top-right-radius:0px]",
              !expanded.value && isDisconnected.value ? "rounded-sheet" : "rounded-compact-sheet",
              className
            )}
            {...rest}
          >
            <SizeTransition visible={!expanded.value && isDisconnected.value} className="p-1" >
              <div className="flex pl-[10px] pr-[5px] pt-[6px] pb-[8px] [background-color:black] ">

                <div className="flex w-[40px] h-[40px] [background-color:red]">
                  <img src="https://www.intelli4.co/favicon.ico" style={"width:40px; height:40px"} alt="avatar" />
                </div>

                <div className="flex-col ml-[10px] -mt-[0px] max-w-[350px]">

                  <div className="flex">
                    <div className="flex -mt-[2px]">
                      <p className="text-[22px]">🤖</p>
                    </div>
                    <div className="flex ml-[10px]">
                      <p className="[color:white] text-[16px]">Assistant</p>
                    </div>
                  </div>

                  <div className="flex-col ml-[2px] mt-[7px]">
                    <div className="flex word-wrap">
                      <p className="[color:white] text-[14px] [line-height:20px] "> 
                        I am here to answer your questions. I can help with answering question on INTELLI4 services, help you put in touch with our support team.
                      </p>
                    </div>
                    <div className="flex">
                    </div>
                  </div>
                </div>

              </div>
            </SizeTransition>

              <div className="flex pl-[15px] pr-[5px] pt-[20px] pb-[20px] [background-color:white]">
                <div className="flex">
                    <p className="text-[20px]"> 🇺🇸 </p>
                </div>
                <div className="flex ml-[20px]">
                    <p className="text-[20px]"> 🇲🇽 </p>
                </div>
                <div className="flex ml-[20px]">

                </div>
              </div>

            <div className="flex items-center px-[0px] mt-[10px] mb-[0px]">
              <ExpandableTriggerActions expanded={expanded} />
            </div>

          </div>

          <div className="[background-color:#ffa100ff] text-center py-1">
            Powered by INTELLI4
          </div>

        </div>
        
      </div>
    )}

    </>
  );
}
