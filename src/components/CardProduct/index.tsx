import { formatCurrency } from '@/utils/formatCurrency';
import { HiStar } from 'react-icons/hi';
import {
  ContainerData,
  ContainerProduct,
  InformationProduct,
  ProductImage,
  RatingsProduct,
  TitleProduct,
  ValueProduct,
} from './styles';

const CardProduct: React.FC = () => {
  return (
    <ContainerProduct>
      <ProductImage
        width={256}
        height={256}
        src="https://res.cloudinary.com/animetempest/image/upload/v1645492720/triple_cheese_gkblmf.jpg"
        alt="Triple cheese burger"
        // fill
      />
      <ContainerData>
        <InformationProduct>
          <ValueProduct>
            {formatCurrency(24.99)}
          </ValueProduct>
          <RatingsProduct>
            <HiStar />
            4.5
          </RatingsProduct>
        </InformationProduct>
        <TitleProduct>Artesanal Triplo Queijo</TitleProduct>
      </ContainerData>
    </ContainerProduct>
  );
};

export default CardProduct;
