import { styled } from 'styled-components';
import MuiAvatar from '@mui/material/Avatar';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const Avatar = styled(MuiAvatar)`
  margin-left: 8px;
`;

export const Name = styled.p`
  margin-left: 8px;
`;
