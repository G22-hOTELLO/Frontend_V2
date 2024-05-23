import "antd/dist/antd.min.css";
import { Select } from "antd";

const Filtri = ({ className = "" }) => {
  return (
    <Select
      className={`absolute top-[3.563rem] left-[0rem] font-montserrat font-semibold text-[2rem] text-dimgray ${className}`}
      style={{ width: "336px" }}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      virtual={false}
      showArrow={false}
    >
      <Select.Option value="Tipo camera">Tipo camera</Select.Option>
    </Select>
  );
};

Filtri.propTypes = {
  className: PropTypes.string,
};

export default Filtri;
