import { Button, FormLabel, InputGroup } from "react-bootstrap"
import '../../css/ItemDetail.css';

const ItemCount = ({ item, count, setCount }) => {
    

    return (
        <div className="d-flex align-items-center">
            <InputGroup style={{ width: 200 }}>
                <Button style={{ width: 40 }} variant="secondary" id="button-min" onClick={() => { count > 1 && setCount(count - 1) }}>-</Button>
                <FormLabel className="border d-flex align-items-center justify-content-center m-0" style={{ width: 120, height: 38 }}>{count}</FormLabel>
                <Button style={{ width: 40 }} variant="secondary" id="button-add" onClick={() => { count < item.stock && setCount(count + 1) }}>+</Button>
            </InputGroup>
            <p className="ms-3">Stock: {item.stock}</p>
        </div>
    )
}

export default ItemCount