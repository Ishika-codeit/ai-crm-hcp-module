import InputField from "./InputField";
import SelectField from "./SelectField";
import TextArea from "./TextArea";
import RadioGroup from "./RadioGroup";
import Button from "../common/Button";

function InteractionForm() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        Log Interaction
      </h2>

      <InputField
        label="HCP Name"
        placeholder="Enter doctor's name"
      />

      <SelectField
        label="Interaction Type"
        options={[
          "In-Person Visit",
          "Phone Call",
          "Virtual Meeting",
          "Email"
        ]}
      />

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Date"
          type="date"
        />

        <InputField
          label="Time"
          type="time"
        />
      </div>

      <InputField
        label="Attendees"
        placeholder="Sales Rep, Doctor, Nurse"
      />

      <TextArea
        label="Discussion Topic"
        placeholder="Discuss meeting topics..."
      />

      <InputField
        label="Materials Shared"
        placeholder="Brochure, Product Leaflet..."
      />

      <InputField
        label="Samples Distributed"
        placeholder="Drug Samples"
      />

      <RadioGroup
        label="Sentiment"
      />

      <TextArea
        label="Outcome"
        placeholder="Meeting outcome..."
      />

      <TextArea
        label="Follow-up Action"
        placeholder="Next visit, webinar invite..."
      />

      <TextArea
        label="Meeting Notes"
        placeholder="Additional notes..."
      />

      <Button
        title="Save Interaction"
      />

    </div>
  );
}

export default InteractionForm;