import { Button, Form, FormLabel, InputGroup } from "react-bootstrap"
import '../../css/ItemDetail.css';

const ItemCount = ({ item, count, setCount }) => {
    return (
        <div className="my-3">
            <InputGroup style={{ width: 150 }}>
                <Button style={{ width: 40 }} variant="secondary" id="button-min" onClick={() => { count > 1 && setCount(count - 1) }}>-</Button>
                <FormLabel className="border d-flex align-items-center justify-content-center m-0" style={{ width: 70, height: 38 }}>{count}</FormLabel>
                <Button style={{ width: 40 }} variant="secondary" id="button-add" onClick={() => { count < item.stock && setCount(count + 1) }}>+</Button>
            </InputGroup>
            <Form.Text className="text-muted">{item.stock} disponibles</Form.Text>
        </div>
    )
}

export default ItemCount