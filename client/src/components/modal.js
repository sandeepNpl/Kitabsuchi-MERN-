import { Button, Modal } from 'antd';
import { useState } from 'react';
import Form from "../components/reusableForm_book"
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Book
      </Button>
      <Modal title="Book Details" open={isModalOpen}  onCancel={handleCancel} footer={null}>
      <div>
      <Form/>
      </div>
      </Modal>
    </>
  );
};
export default App;