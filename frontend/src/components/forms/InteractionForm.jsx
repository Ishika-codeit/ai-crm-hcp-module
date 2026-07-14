import InputField from "./InputField";
import Button from "../common/Button";

function InteractionForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Log Interaction
      </h2>

      <InputField
        label="HCP Name"
        placeholder="Enter doctor's name"
      />

      <InputField
        label="Interaction Type"
        placeholder="Visit / Call / Meeting"
      />

      <InputField
        label="Date"
        type="date"
      />

      <InputField
        label="Time"
        type="time"
      />

      <Button
        title="Save Interaction"
      />

    </div>
  );
}

export default InteractionForm;