import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  MouseEvent,
} from 'react';
import QrReader from 'react-qr-reader';
import { useTransition } from 'react-spring';
import { FiCheckCircle } from 'react-icons/fi';

import {
  Container,
  QrReaderBox,
  ModalBox,
  Modal,
  ModalFooter,
  ProductList,
  PopupBox,
  Popup,
} from './styles';
import Button from '../../components/Button';
import api from '../../services/api';

interface Product {
  id: string;
  name: string;
  quantity: number;
}

const Register: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const modalBoxRef = useRef(null);
  const popupRef = useRef(null);

  const transitionsModal = useTransition(showModal, null, {
    from: { bottom: '-120%' },
    enter: { bottom: '0%' },
    leave: { bottom: '-120%' },
  });

  const transitionsPopup = useTransition(showPopup, null, {
    from: { transform: 'scale(0)' },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(0)' },
  });

  useEffect(() => {
    setProducts([]);
  }, []);

  const addProduct = useCallback(
    (scannedProduct: Omit<Product, 'quantity'>) => {
      const productExists = products.find(
        product => product.id === scannedProduct.id,
      );

      if (productExists) {
        setProducts([
          ...products.map(product =>
            product.id === scannedProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ),
        ]);
      } else {
        setProducts(state => [...state, { ...scannedProduct, quantity: 1 }]);
      }
    },
    [products],
  );

  const transformData = useCallback(data => {
    return JSON.parse(data);
  }, []);

  const handleScan = useCallback(
    data => {
      if (data) {
        const product = transformData(data);
        addProduct(product);
        setShowPopup(true);
      }
    },
    [addProduct, transformData],
  );

  const handleError = useCallback(err => {
    console.error(err);
  }, []);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback((event: MouseEvent) => {
    event.stopPropagation();

    if (event.target !== modalBoxRef.current) {
      return;
    }

    setShowModal(false);
  }, []);

  const handleClosePopup = useCallback((event: MouseEvent) => {
    event.stopPropagation();

    if (event.target === popupRef.current) {
      return;
    }

    setShowPopup(false);
  }, []);

  const handleEnviarProdutos = useCallback(async () => {
    const headers = { 'Content-Type': 'application/json' };
    const productsData = products.map(product => ({
      product_id: product.id,
      quantity: product.quantity,
    }));

    await api.post(
      'purchase_products/add_products',
      { products: productsData },
      { headers },
    );

    setShowModal(false);
    setProducts([]);
  }, [products]);

  return (
    <Container>
      <QrReaderBox>
        <QrReader
          delay={1000}
          showViewFinder={false}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />

        <span />
      </QrReaderBox>

      <Button isDisabled={!products.length} onClick={handleOpenModal}>
        Ver produtos ({products.length})
      </Button>

      {transitionsModal.map(
        ({ item, key, props }) =>
          item && (
            <ModalBox ref={modalBoxRef} key={key} onClick={handleCloseModal}>
              <Modal style={props}>
                <h3>Produtos</h3>

                <ProductList>
                  {products.map(product => (
                    <li key={product.id}>
                      <p>Nome: {product.name}</p>
                      <p>Quantidade: {product.quantity}</p>
                    </li>
                  ))}
                </ProductList>

                <ModalFooter>
                  <Button onClick={handleEnviarProdutos}>Enviar</Button>
                </ModalFooter>
              </Modal>
            </ModalBox>
          ),
      )}

      {transitionsPopup.map(
        ({ item, key, props }) =>
          item && (
            <PopupBox key={key} onClick={handleClosePopup}>
              <Popup ref={popupRef} style={props}>
                <h2>Produto Adicionado!</h2>

                <Button onClick={handleClosePopup}>
                  Ok
                  <FiCheckCircle size={18} />
                </Button>
              </Popup>
            </PopupBox>
          ),
      )}
    </Container>
  );
};

export default Register;
