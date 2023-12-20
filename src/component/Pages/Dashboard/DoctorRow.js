import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, specialty, img, details } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        {details && details.length > 50
          ? `${details.slice(0, 15)}...`
          : details}
      </td>
      <td>
        {/* <DeleteConfirmModal></DeleteConfirmModal> */}
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn modal-button btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
