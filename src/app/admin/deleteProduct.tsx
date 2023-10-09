"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

type Product = {
  id: number;
  title: string;
  desc: string;
  harga: number;
  image: string;
};

const DeleteProduct = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    await axios.delete(`/api/products/${id}`);
    setIsLoading(false);
    router.refresh();
    setIsOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    
    <div>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalBody>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are sure to delete {product.title}?
          </h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={toggleModal}>
              No
            </button>
            {!isLoading ? (
              <button
                type="button"
                onClick={() => handleDelete(product.id)}
                className="btn btn-primary"
              >
                Yes
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <button className="btndel" onClick={toggleModal}>
        Delete
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>

      </div>
    </div>
  );
};

export default DeleteProduct;