import cities from "data/cities.json";
import states from "data/states.json";
import Downshift from "downshift";

const items = cities.map((x) => ({
  ...x,
  value: x.city + ", " + states[x.state as keyof typeof states],
}));

export default function Autocomplete({
  onChange,
}: {
  onChange: (selection: any) => void;
}) {
  return (
    <Downshift
      onChange={(selection) => onChange(selection)}
      itemToString={(item) => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <div className="autocomplete pa4 mw7 mxauto">
          <div {...getRootProps(undefined, { suppressRefError: true })}>
            <input {...getInputProps()} placeholder="Enter a City" />
          </div>
          <ul {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.longitude + item.latitude,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal",
                        },
                        className: "item",
                      })}
                    >
                      {item.value}
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
}
