import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import Link from "next/link";
import "@mdi/font/css/materialdesignicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UsersBalances = () => {
  return (
    <Card className="shadow-sm border-0 my-4">
      <Card.Body>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h5 className="text-[18px]">Top 5 Users Balances</h5>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="link"
              className="text-muted p-0 shadow-none"
            >
              {/* <i className="mdi mdi-dots-vertical"></i> */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit Report</Dropdown.Item>
              <Dropdown.Item>Export Report</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th colSpan={2} className="text-[15px] font-medium">Profile</th>
                <th className="text-[15px] font-medium">Currency</th>
                <th className="text-[15px] font-medium">Balance</th>
                <th className="text-[15px] font-medium">Reserved in orders</th>
                <th className="text-[15px] font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "45px" }}>
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Tomaslau"
                    className="rounded-circle"
                    style={{ width: "36px", height: "36px", objectFit: "cover" }}
                  />
                </td>
                <td>
                  <h6 className="mb-0 text-[14px]">Tomaslau</h6>
                  <small className="text-[13px] font-thin">Member Since 2017</small>
                </td>
                <td className="text-[14px]">
                  <span className="text-primary d-flex align-items-center">
                    <i className="mdi mdi-currency-btc me-1"></i>BTC
                  </span>
                </td>
                <td className="text-[14px]">0.00816117 BTC</td>
                <td className="text-[14px]">0.00097036 BTC</td>
                <td>
                  <Link href="#"><span className="btn btn-sm btn-light me-1"><i className="mdi mdi-plus"></i></span></Link>
                  <Link href="#"><span className="btn btn-sm btn-danger !bg-[#3d7754] hover:!bg-[#000]  border-0"><i className="mdi mdi-minus"></i></span></Link>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Erwin E. Brown"
                    className="rounded-circle"
                    style={{ width: "36px", height: "36px", objectFit: "cover" }}
                  />
                </td>
                <td>
                  <h6 className="mb-0 text-[14px]">Erwin E. Brown</h6>
                  <small className="text-[13px] font-thin">Member Since 2017</small>
                </td>
                <td className="text-[14px]">
                  <span className="text-primary d-flex align-items-center">
                    <i className="mdi mdi-currency-eth me-1"></i>ETH
                  </span>
                </td>
                <td className="text-[14px]">3.16117008 ETH</td>
                <td className="text-[14px]">1.70360009 ETH</td>
                <td>
                  <Link href="#"><span className="btn btn-sm btn-light me-1"><i className="mdi mdi-plus"></i></span></Link>
                  <Link href="#"><span className="btn btn-sm btn-danger !bg-[#3d7754] hover:!bg-[#000]  border-0"><i className="mdi mdi-minus"></i></span></Link>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Margeret V. Ligon"
                    className="rounded-circle"
                    style={{ width: "36px", height: "36px", objectFit: "cover" }}
                  />
                </td>
                <td>
                  <h6 className="mb-0 text-[14px]">Margeret V. Ligon</h6>
                  <small className="text-[13px] font-thin">Member Since 2017</small>
                </td>
                <td className="text-[14px]">
                  <span className="text-primary d-flex align-items-center">
                    <i className="mdi mdi-currency-eur me-1"></i>EUR
                  </span>
                </td>
                <td className="text-[14px]">25.08 EUR</td>
                <td className="text-[14px]">12.58 EUR</td>
                <td>
                  <Link href="#"><span className="btn btn-sm btn-light me-1"><i className="mdi mdi-plus"></i></span></Link>
                  <Link href="#"><span className="btn btn-sm btn-danger !bg-[#3d7754] hover:!bg-[#000]  border-0"><i className="mdi mdi-minus"></i></span></Link>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Jose D. Delacruz"
                    className="rounded-circle"
                    style={{ width: "36px", height: "36px", objectFit: "cover" }}
                  />
                </td>
                <td>
                  <h6 className="mb-0 text-[14px]">Jose D. Delacruz</h6>
                  <small className="text-[13px] font-thin">Member Since 2017</small>
                </td>
                <td className="text-[14px]">
                  <span className="text-primary d-flex align-items-center">
                    <i className="mdi mdi-currency-cny me-1"></i>CNY
                  </span>
                </td>
                <td className="text-[14px]">82 CNY</td>
                <td className="text-[14px]">30.83 CNY</td>
                <td>
                  <Link href="#"><span className="btn btn-sm btn-light me-1"><i className="mdi mdi-plus"></i></span></Link>
                  <Link href="#"><span className="btn btn-sm btn-danger !bg-[#3d7754] hover:!bg-[#000]  border-0"><i className="mdi mdi-minus"></i></span></Link>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Luke J. Sain"
                    className="rounded-circle"
                    style={{ width: "36px", height: "36px", objectFit: "cover" }}
                  />
                </td>
                <td>
                  <h6 className="mb-0 text-[14px]">Luke J. Sain</h6>
                  <small className="text-[13px] font-thin">Member Since 2017</small>
                </td>
                <td className="text-[14px]">
                  <span className="text-primary d-flex align-items-center">
                    <i className="mdi mdi-currency-btc me-1"></i>BTC
                  </span>
                </td>
                <td className="text-[14px]">2.00816117 BTC</td>
                <td className="text-[14px]">1.00097036 BTC</td>
                <td>
                  <Link href="#"><span className="btn btn-sm btn-light me-1"><i className="mdi mdi-plus"></i></span></Link>
                  <Link href="#"><span className="btn btn-sm btn-danger !bg-[#3d7754] hover:!bg-[#000]  border-0"><i className="mdi mdi-minus"></i></span></Link>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UsersBalances;
