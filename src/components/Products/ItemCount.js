import { Button, Form, FormLabel, InputGroup } from "react-bootstrap"
import '../../css/ItemDetail.css';

const ItemCount = ({ stock, count, setCount }) => {
    return (
        <div className="my-3">
            <InputGroup>
                <Button variant="dark" style={{ width: 45 }} onClick={() => { count > 1 && setCount(count - 1) }}>-</Button>
                <FormLabel className="border d-flex align-items-center justify-content-center m-0 px-4">{count}</FormLabel>
                <Button variant="dark" style={{ width: 45 }} className="text-center" onClick={() => { count < stock && setCount(count + 1) }}>+</Button>
            </InputGroup>
            <Form.Text className="text-muted">{stock} disponibles</Form.Text>
        </div>
    )
}

export default ItemCount