import Image from 'next/image';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { Form } from '@unform/web';

export const StyledModal = Modal.styled`
  width: 45%;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  padding: 18px;
  height: 85%;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 0 12px ${({ theme }) =>
    theme.currentLine}22;
`;

export const TitleModal = styled.h1`
  font-size: 2rem;
`;

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1;
  overflow-y: auto;
`;

export const UploadImage = styled.label`
  display: flex;
  border: 4px dashed ${({ theme }) => theme.comment};
  color: ${({ theme }) => theme.comment};
  flex: 0 0 256px;
  width: 256px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(75%);
  }
`;

export const ImagePreview = styled(Image)`
  border-radius: 18px;
`;

export const GroupInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const GroupButton = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 8px;
`;
