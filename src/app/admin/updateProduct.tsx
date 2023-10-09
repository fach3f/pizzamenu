"use client";
import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  desc: string;
  harga: number;
  image: string;
};

const UpdateProduct = ({ product }: { product: Product }) => {
  const [title, setTitle] = useState(product.title);
  const [desc, setDesc] = useState(product.desc);
  const [harga, setHarga] = useState(product.harga.toString()); // Mengubah harga ke string
  const [image, setImage] = useState(product.image);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.patch(`/api/products/${product.id}`, {
        title: title,
        desc: desc,
        harga: Number(harga), // Mengubah harga ke tipe data number
        image: image,
      });

      router.refresh(); // Menggunakan router.reload() untuk me-refresh halaman
      setModalOpen(false);
    } catch (error) {
      console.error("Error while updating product:", error);
    } finally {
      setIsLoading(false); // Mengubah isLoading menjadi false setelah proses selesai, baik berhasil atau gagal
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <button className="btn-upd" onClick={toggleModal}>
        Update
      </button>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalBody>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Food name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Food Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Description</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Description of food"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Price"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Image</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="modal-action">
              {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
