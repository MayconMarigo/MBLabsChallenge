import { Text } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import { EventTitleWithSubtitleProps } from "./interfaces";

const EventTitleWithSubtitle: React.FC<EventTitleWithSubtitleProps> = (
  props
) => {
  const theme = ThemeUseContext();
  return (
    <>
      <Text
        style={{
          color: theme.DEFAULT_TEXT,
          fontSize: theme.TITLE_FONT_SIZE,
          fontWeight: "700",
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          color: theme.DEFAULT_TEXT_OPACITY,
          fontSize: theme.SUBTITLE_FONT_SIZE,
        }}
      >
        {`${props.date} • ${props.city} / ${props.UF}`}
      </Text>
    </>
  );
};
export default EventTitleWithSubtitle;
