import { useWidgetConfig } from "../contexts/widget-config";
import { useConversation } from "../contexts/conversation";
import { CallButton } from "./CallButton";
import { TriggerLanguageSelect } from "./TriggerLanguageSelect";
import { TriggerMuteButton } from "./TriggerMuteButton";

export function TriggerActions() {
  const { isDisconnected, status } = useConversation();

  const config = useWidgetConfig();
  const variant = config.value.variant;

  return (
    <>
      <CallButton
        isDisconnected={isDisconnected.value}
        iconOnly={variant === "tiny"}
        className="w-full m-1 z-1"
        disabled={
          status.value === "disconnecting" || status.value === "connecting"
        }
      />
      <TriggerLanguageSelect visible={isDisconnected.value} />
      <TriggerMuteButton visible={!isDisconnected.value} />
    </>
  );
}
