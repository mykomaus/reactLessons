/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { getValue } from "../../utils/getValue";
import { VscChromeClose } from "react-icons/vsc";
import { useEffect } from "react";

export const Form = ({
  isModal,
  setIsModal,
  currentId,
  data,
  isAdd,
  setIsAdd,
  onSubmit,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const customStyles = {
    content: {
      width: 500,
      height: 500,
      position: "absolute",
      top: "50%",
      left: " 50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 32,
      display: "flex",
      flexDirection: "column",
    },
  };

  const onSubmitClick = (data) => {
    onSubmit(data);
    closeModal();
  };

  const closeModal = () => {
    setIsAdd(false);
    setIsModal(false);
  };
  useEffect(() => {
    reset({
      model: getValue(currentId, "model", data),
      type: getValue(currentId, "type", data),
      brand: getValue(currentId, "brand", data),
      color: getValue(currentId, "color", data),
      fuel: getValue(currentId, "fuel", data),
    });
  }, [currentId, reset, data]);

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Edit vehicle</h1>
        <button
          onClick={closeModal}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            aspectRatio: 1,
          }}
        >
          <VscChromeClose size={24} />
        </button>
      </div>
      <form
        style={{
          flexDirection: "column",
          display: "flex",
          paddingLeft: 32,
          paddingRight: 32,
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
        onSubmit={handleSubmit(onSubmitClick)}
      >
        <div style={{ flexDirection: "column", display: "flex" }}>
          <label>Model</label>
          <input name="model" {...register("model")} />
          <label>Brand</label>
          <input name="brand" {...register("brand")} />
          <label>Type</label>
          <input name="type" {...register("type")} />
          <label>Fuel</label>
          <input name="fuel" {...register("fuel")} />
          <label>Color</label>
          <input name="color" {...register("color")} />
        </div>

        <button>{isAdd ? "Add new" : "Submit"}</button>
      </form>
    </Modal>
  );
};
