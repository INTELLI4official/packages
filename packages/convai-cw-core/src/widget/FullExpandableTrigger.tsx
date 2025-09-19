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
  if (config.value.ic_placement === "right-bottom-1"){
    icClassName = "flex-col justify-end items-end"
  }


  return (
    <>
    {config.value.ic_placement === "right-bottom-1" && (
      <div className="!flex flex-col absolute w-full h-full  justify-end items-end ">
        <div
          className={clsx( "mb-[200px] ",
            icClassName,
            !expanded.value && isDisconnected.value ? "rounded-sheet" : "rounded-compact-sheet",
            className
          )}
          {...rest}
        >
          <SizeTransition visible={!expanded.value && isDisconnected.value} className="p-1 !min-w-60" >
            <div className="flex gap-2">
              <Avatar />
              <div className="sm:text-[15px] max-w-64">{text.main_label}</div>
            </div>
          </SizeTransition>

          <div className="flex items-center">
            <ExpandableTriggerActions expanded={expanded} />
          </div>
        </div>
      </div>
    )}

    </>
  );
}
