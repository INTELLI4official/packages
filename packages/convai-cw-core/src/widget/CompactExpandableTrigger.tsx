import { clsx } from "clsx";
import { SizeTransition } from "../components/SizeTransition";
import { Avatar } from "../components/Avatar";
import { ExpandableTriggerActions } from "./ExpandableTriggerActions";
import { ExpandableProps } from "./Trigger";

import { useWidgetConfig } from "../contexts/widget-config";

export function CompactExpandableTrigger({
  expanded,
  className,
  ...rest
}: ExpandableProps) {

  const config = useWidgetConfig();

  return (
    <div
      className={clsx("rounded-compact-sheet flex items-center p-2", className)}
      {...rest}
    >
      <SizeTransition visible={!expanded.value} className="p-1">
        <Avatar />
      </SizeTransition>
      
      <ExpandableTriggerActions expanded={expanded} />
    </div>
  );
}
