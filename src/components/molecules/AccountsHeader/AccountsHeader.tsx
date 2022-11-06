import { useState } from "react";
import { Text, View } from "react-native";
import { ThemeUseContext } from "../../../theme/Theme";
import Avatar from "../../atoms/Avatar/Avatar";
import CustomButton from "../../atoms/Button/Button";
import { AccountsHeaderProps } from "./interfaces";

const AccountsHeader: React.FC<AccountsHeaderProps> = (props) => {
  const theme = ThemeUseContext();

  const [isLogged, setIsLogged] = useState<boolean>(true);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingBottom: 15,
        height: 180,
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: theme.HEADER_GRADIENT,
      }}
    >
      <View style={{ width: "50%" }}>
        <Text
          style={{
            color: theme.DEFAULT_TEXT_HEADER,
            fontSize: theme.TITLE_FONT_SIZE,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          {`${props.name}`}
        </Text>
        {!!props.button && (
          <CustomButton
            text="Editar Perfil"
            width="100%"
            bgColor={theme.AVATAR_BACKGROUND}
            textColor={theme.DEFAULT_TEXT_HEADER}
          />
        )}
      </View>
      {!!props.avatarName && (
        <Avatar
          icon={true}
          name={props.avatarName}
          iconSize={60}
          width={100}
          height={100}
        />
      )}
    </View>
  );
};
export default AccountsHeader;
