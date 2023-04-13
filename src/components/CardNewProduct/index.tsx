import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import ModalNewProduct from '../Modals/ModalNewProduct';

import { ContainerNewProduct } from './styles';

const CardNewProduct: React.FC = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <>
      <ModalNewProduct
        isVisible={isOpenedModal}
        onClose={() => setIsOpenedModal(false)}
      />
      <ContainerNewProduct
        onClick={() => setIsOpenedModal(true)}
      >
        <MdAdd size={42} />
      </ContainerNewProduct>
    </>
  );
};

export default CardNewProduct;
