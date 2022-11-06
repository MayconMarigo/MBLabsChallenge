import { Fragment } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeUseContext } from "../../../theme/Theme";
import { AccountsItemsProps, Items } from "./interfaces";

const AccountsItems: React.FC<AccountsItemsProps> = (props) => {
  const theme = ThemeUseContext();
  return (
    <ScrollView>
      {!!props.content &&
        props.content.map((item: Items, index: number) => {
          return (
            <Fragment key={index}>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.INSIDE_COMPONENT,
                  padding: 15,
                  paddingVertical: item.subtitle ? 15 : 20,
                  marginBottom: 3,
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                {!!item.iconName && (
                  <View style={{ width: 40, alignItems: "center" }}>
                    <Icon name={item.iconName} size={28} />
                  </View>
                )}
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: theme.TITLE_FONT_SIZE,
                      fontWeight: "700",
                      color: theme.DEFAULT_TEXT,
                    }}
                  >
                    {item.title}
                  </Text>
                  {!!item.subtitle && (
                    <Text
                      style={{
                        fontSize: theme.SUBTITLE_FONT_SIZE,
                        color: theme.DEFAULT_TEXT,
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  )}
                </View>
                <Icon name="chevron-right" size={20} />
              </TouchableOpacity>
              {index == 3 ? (
                <View
                  style={{
                    backgroundColor: theme.INSIDE_COMPONENT,
                    marginTop: 3,
                    marginBottom: 6,
                    width: "100%",
                    height: 25,
                  }}
                />
              ) : null}
            </Fragment>
          );
        })}
    </ScrollView>
  );
};
export default AccountsItems;
