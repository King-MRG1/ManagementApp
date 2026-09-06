import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function AddNewOrder({ handleClose, isOpen }) {
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          sx={{ m: 0, p: 2, fontWeight: "700", fontSize: "20px !important" }}
          id="customized-dialog-title"
        >
          Add New Order
        </DialogTitle>
        <DialogContent dividers>
          <form action="" className="modalForm">
            <p>Trader and Shipping Data</p>
            <div>
              <label htmlFor="Trader">Trader</label>
              <select name="Trader" id="Trader">
                <option value="M.Ramadan">Mohamed Ramadan</option>
                <option value="M.Amir">Amir</option>
              </select>
            </div>
            <div>
              <label htmlFor="OrderType">Order Trader</label>
              <select name="OrderType" id="OrderType">
                <option value="M.Ramadan">Mohamed Ramadan</option>
                <option value="M.Amir">Amir</option>
              </select>
            </div>
            <hr />
            <p>Customer Data</p>
            <div>
              <label htmlFor="CustomerName">Customer Name</label>
              <input
                type="text"
                placeholder="Name"
                name="CustomerName"
                id="CustomerName"
              />
            </div>
            <div>
              <label htmlFor="Phone1">Phone</label>
              <input
                type="number"
                placeholder="01xxxxxxxxx"
                name="Phone1"
                id="Phone1"
              />
            </div>
            <div>
              <label htmlFor="Phone2">Phone2</label>
              <input
                type="number"
                placeholder="Optional"
                name="Phone2"
                id="Phone2"
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                name="Email"
                id="Email"
              />
            </div>
            <div>
              <label htmlFor="Governorate">Governorate</label>
              <select name="Governorate" id="Governorate">
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
              </select>
            </div>
            <div>
              <label htmlFor="City">City</label>
              <select name="City" id="City">
                <option value="October6">October 6</option>
                <option value="Zamalek">Zamalek</option>
                <option value="BolaqEldakror">Bolaq Eldakror</option>
              </select>
            </div>
            <div>
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                placeholder="Address"
                name="Address"
                id="Address"
              />
            </div>
            <div>
              <label htmlFor="Inside">Inside Street</label>
              <input type="checkBox" name="Inside" id="Inside" />
            </div>
            <hr />
            <p>Shipping details</p>
            <div>
              <label htmlFor="ShippingType">Shipping Type</label>
              <select name="ShippingType" id="ShippingType">
                <option value="NormalShipping">Normal Shipping</option>
                <option value="ShippingOn2Days">Shipping on 2 days</option>
                <option value="ShippingOn24">Shipping On 24h</option>
                <option value="ShippingOnBranch">Shipping on branch</option>
              </select>
            </div>
            <div>
              <label htmlFor="PayingType">Paying Type</label>
              <select name="PayingType" id="PayingType">
                <option value="CashOnDeliver">Cash on deliver</option>
                <option value="BankTransfer">Bank transfer</option>
                <option value="Card">Card</option>
              </select>
            </div>
            <div>
              <label htmlFor="OrderCost">Order Cost</label>
              <input
                type="text"
                placeholder="Order Cost"
                name="OrderCost"
                id="OrderCost"
              />
            </div>
            <div>
              <label htmlFor="TotalWeight">Total Weight</label>
              <input
                type="text"
                name="TotalWeight"
                id="TotalWeight"
                placeholder="Total Weight"
              />
            </div>
            <hr />
            <p>Products</p>
            <div className="table-container">
              <table border={1}>
                <tr>
                  <th>Product Name</th>
                  <th>Qantity</th>
                  <th>Weight (kg)</th>
                  <th>Delete</th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="ProductName"
                    />
                  </td>
                  <td>
                    <input type="number" placeholder="1" name="Qantity" />
                  </td>
                  <td>
                    <input type="number" placeholder="0.5" name="Weight" />
                  </td>
                  <td>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="ProductName"
                    />
                  </td>
                  <td>
                    <input type="number" placeholder="1" name="Qantity" />
                  </td>
                  <td>
                    <input type="number" placeholder="0.5" name="Weight" />
                  </td>
                  <td>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              </table>
              <br />
              <button>Add new Product</button>
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="Notes">Notes</label>
              <textarea
                name="Notes"
                id="Notes"
                placeholder="Extra Notes"
              ></textarea>
            </div>
            <div className="trader-Data">
              <p>Trader details</p>
              <div className="dataContainer">
                <div>
                  <label htmlFor="TraderPhone">Trader Phone</label>
                  <input
                    type="text"
                    name="TraderPhone"
                    id="TraderPhone"
                    readOnly
                    value={"0123546554"}
                  />
                </div>
                <div>
                  <label htmlFor="TraderAddress">Trader Address</label>
                  <input
                    type="text"
                    name="TraderAddress"
                    id="TraderAddress"
                    readOnly
                    value={"giza"}
                  />
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="modal-submit"
            variant="contained"
            autoFocus
            onClick={handleClose}
          >
            Add Order
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
