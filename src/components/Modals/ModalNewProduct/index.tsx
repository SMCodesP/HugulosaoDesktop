import {
  ChangeEventHandler,
  useEffect,
  useState,
} from 'react';

import { SubmitHandler } from '@unform/core';

import { Form } from '@unform/web';

import { FaCamera } from 'react-icons/fa';

import {
  ContainerForm,
  GroupButton,
  GroupInputs,
  ImagePreview,
  StyledModal,
  TitleModal,
  UploadImage,
} from './styles';
import TextInput from '@/components/TextInput';
import TextEdit from '@/components/TextEdit';
import SelectInput from '@/components/SelectInput';
import DefaultButton from '@/components/DefaultButton';
import { useTheme } from 'styled-components';

const ModalNewProduct: React.FC<{
  isVisible: boolean;
  onClose: () => void;
}> = ({ isVisible, onClose }) => {
  const [productImage, setProductImage] =
    useState<File | null>(null);
  const [preview, setPreview] = useState(``);
  const theme = useTheme();

  useEffect(() => {
    if (productImage) {
      const objectUrl = URL.createObjectURL(productImage);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [productImage]);

  const onSelectImage: ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setProductImage(null);
      return;
    }
    setProductImage(e.target.files[0]);
  };

  const onSubmitNewProduct: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <StyledModal isOpen={true}>
      <TitleModal>Novo produto</TitleModal>
      <ContainerForm onSubmit={onSubmitNewProduct}>
        <UploadImage htmlFor="image">
          {preview ? (
            <ImagePreview
              src={preview}
              alt="Preview image product"
              fill
            />
          ) : (
            <FaCamera size={42} />
          )}
        </UploadImage>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={onSelectImage}
          hidden
        />
        <GroupInputs>
          <TextInput
            name="name"
            placeholder="Digite o nome do lanche"
            label="Nome:"
          />
          <TextInput
            name="value"
            placeholder="Digite o valor do lanche"
            label="Valor:"
            type="number"
            step={0.1}
            min="0"
          />
        </GroupInputs>
        <SelectInput
          name="category"
          label="Categoria:"
          options={[
            { value: `chocolate`, label: `Chocolate` },
            { value: `strawberry`, label: `Strawberry` },
            { value: `vanilla`, label: `Vanilla` },
          ]}
        />
        <TextEdit
          name="description"
          placeholder="Digite uma descrição para lanche"
          label="Descrição:"
          maxLength={8}
        />
        <GroupButton>
          <DefaultButton
            color={theme.red}
            text="Cancelar"
          />
          <DefaultButton type="submit" text="Salvar" />
        </GroupButton>
      </ContainerForm>
    </StyledModal>
  );
};

export default ModalNewProduct;
