"use client";
import { SyntheticEvent, useState } from "react";   
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useRouter } from "next/navigation"; // Menggunakan 'next/router' daripada 'next/navigation'

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [harga, setHarga] = useState("");
  const [image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Menambahkan state isLoading

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true); // Mengubah isLoading menjadi true saat proses submit dimulai
    try {
      await axios.post("/api/products", {
        title: title,
        desc: desc,
        harga: Number(harga),
        image: image,
      });
      setTitle(""); 
      setDesc("");
      setHarga("");
      setImage("");
      router.refresh(); // Menggunakan router.reload() untuk me-refresh halaman
      setIsOpen(false);
    } catch (error) {
      console.error("Error while adding product:", error);
    } finally {
      setIsLoading(false); // Mengubah isLoading menjadi false setelah proses selesai, baik berhasil atau gagal
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalBody>
        <form onSubmit={handleSubmit}>
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
      <button className="btn" onClick={toggleModal}>
        Add New
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="add">Add New Product</h3>

        </div>
      </div>
    </div>
  );
};

export default AddProduct;
