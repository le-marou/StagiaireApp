import React from "react";
import { Button, Table } from "reactstrap";

const Stage = () => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Stagiaire</th>
            <th className="text-center">Date debut</th>
            <th className="text-center">Date fin</th>
            <th className="text-right">Encadrant de stage</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td className="text-center">Marou</td>
            <td className="text-center">31/01/1754</td>
            <td className="text-right">31/01/1754</td>
            <td className="text-right">Bouba</td>
            <td className="text-right">
              <Button className="btn-icon" color="info" size="sm">
                <i className="fa fa-user"></i>
              </Button>
              {` `}
              <Button className="btn-icon" color="success" size="sm">
                <i className="fa fa-edit"></i>
              </Button>
              {` `}
              <Button className="btn-icon" color="danger" size="sm">
                <i className="fa fa-times" />
              </Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td className="text-center">Marou</td>
            <td className="text-center">31/01/1754</td>
            <td className="text-right">31/01/1754</td>
            <td className="text-right">Bouba</td>
            <td className="text-right">
              <Button className="btn-icon btn-round" color="info" size="sm">
                <i className="fa fa-user"></i>
              </Button>
              {` `}
              <Button className="btn-icon btn-round" color="success" size="sm">
                <i className="fa fa-edit"></i>
              </Button>
              {` `}
              <Button className="btn-icon btn-round" color="danger" size="sm">
                <i className="fa fa-times" />
              </Button>
              {` `}
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td className="text-center">Marou</td>
            <td className="text-center">31/01/1754</td>
            <td className="text-right">31/01/1754</td>
            <td className="text-right">Bouba</td>
            <td className="text-right">
              <Button className="btn-icon btn-round" color="info" size="sm">
                <i className="fa fa-user"></i>
              </Button>
              {` `}
              <Button className="btn-icon btn-round" color="success" size="sm">
                <i className="fa fa-edit"></i>
              </Button>
              {` `}
              <Button className="btn-icon btn-round" color="danger" size="sm">
                <i className="fa fa-times" />
              </Button>
              {` `}
            </td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td className="text-center">Marou</td>
            <td className="text-center">31/01/1754</td>
            <td className="text-right">31/01/1754</td>
            <td className="text-right">Bouba</td>
            <td className="text-right">
              <Button className="btn-icon btn-simple" color="info" size="sm">
                <i className="fa fa-user"></i>
              </Button>
              {` `}
              <Button className="btn-icon btn-simple" color="success" size="sm">
                <i className="fa fa-edit"></i>
              </Button>
              {` `}
              <Button className="btn-icon btn-simple" color="danger" size="sm">
                <i className="fa fa-times" />
              </Button>
              {` `}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Stage;
