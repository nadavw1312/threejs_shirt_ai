import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <div className="flex-1 flex flex-col">
        <textarea
          className="aipicker-textarea"
          placeholder="Ask AI..."
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            title="Generating image..."
            type="ouline"
            customStyles={"text-xs"}
          />
        ) : (
          <>
            <CustomButton
              title="AI Logo"
              type="ouline"
              handleClick={() => handleSubmit("logo")}
              customStyles={"text-xs"}
            />
            <CustomButton
              title="AI Full"
              type="filled"
              handleClick={() => handleSubmit("full")}
              customStyles={"text-xs"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
