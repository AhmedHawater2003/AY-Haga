var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
};
import { forwardRef } from 'react';
import { IconChevronRight,IconLogout,IconUserCircle } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';
import OrgAccountDetails from './org/OrgAccountDetails';
const UserButton = forwardRef((_a, ref) => {
  var { image, name, email, icon } = _a, others = __rest(_a, ["image", "name", "email", "icon"]);
  return (<UnstyledButton ref={ref} style={{
          padding: 'var(--mantine-spacing-md)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'var(--mantine-radius-sm)',
      }} {...others}>
    <Group>
      <Avatar src={image} radius="xl"/>

      <div style={{ flex: 1 }}>
        <Text size="sm" fw={500}>
          {name}
        </Text>

        <Text c="dimmed" size="xs">
          {email}
        </Text>
      </div>

      {icon || <IconChevronRight size="1rem"/>}
    </Group>
  </UnstyledButton>);
});
function AccountButton({setContent, content, email,name}) {
  return (<Menu withArrow>
    <Menu.Target>
      <UserButton  name={name} email={email}/>
    </Menu.Target>
    <Menu.Dropdown  style={{zIndex: 999}}>
      <Menu.Label>Account</Menu.Label>
      <Menu.Item leftSection={<IconUserCircle />} onClick={()=>{setContent(content)}}>
        Profile management
      </Menu.Item>

      <Menu.Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item color="red" leftSection={<IconLogout />} onClick={() => {window.location.href = "http://localhost:5173/login";}}>
        Logout
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>);
}

export default AccountButton;
