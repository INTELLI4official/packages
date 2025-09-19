import { HTMLAttributes } from "preact/compat";
import { clsx } from "clsx";
import { Avatar } from "../components/Avatar";
import { TriggerActions } from "./TriggerActions";

import { useWidgetConfig } from "../contexts/widget-config";

export function CompactTrigger({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  
  const config = useWidgetConfig();
  
  return (
    <div
      className={clsx("rounded-compact-sheet flex items-center p-2", className)}
      {...rest}
    >
      <Avatar className="mx-1" />
      <TriggerActions />
    </div>
  );
}
