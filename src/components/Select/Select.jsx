import Select from "react-select";

const customStyles = {
  option: (styles, { isHovered, isSelected }) => {
    return {
      ...styles,
      fontSize: "20px",
      color: "black",
      backgroundColor: isSelected ? "#4b2a9982" : "white",
      "&:hover": {
        color: "white",
        backgroundColor: isSelected ? "#4b2a995c" : "#372269de",
      },
      "&:active": {
        backgroundColor: "#4b2a9982",
      },
    };
  },
  control: (styles, { isChosen, isFocused, isHovered, isSelected }) => ({
    ...styles,
    fontSize: "20px",
    padding: "10px",
    marginBottom: "30px",

    borderColor:
      isFocused || isHovered || isChosen || isSelected
        ? "#4b2a9982"
        : "lightgray",
    "&:hover": {
      borderColor: isFocused ? "#4b2a9982" : "lightgray",
    },
    boxShadow: isFocused ? "0 0 0 1px blue" : "none",
  }),
};

const options = [
  { value: "showAll", label: "Show all" },
  { value: "follow", label: "Follow" },
  { value: "followings", label: "Followings" },
];

function MySelect({ selectedOption, setSelectedOption }) {
  return (
    <Select
      defaultValue={selectedOption}
      onChange={(e) => setSelectedOption(e.value)}
      options={options}
      styles={customStyles}
    />
  );
}

export default MySelect;
