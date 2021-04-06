import React from "react";
import "bootstrap";
import "../assets/css/style.css";
import { Button, Table } from "reactstrap";
const Stagiaires = () => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th className="text-center">Date Naissance</th>
            <th className="text-right">Sexe</th>
            <th className="text-right">Type de stage</th>
            <th className="text-right">Encadrant</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>Marou</td>
            <td>ali</td>
            <td className="text-center">31/01/1754</td>
            <td className="text-right">homme</td>
            <td className="text-right">technique</td>
            <td className="text-right">kemi</td>
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
            <td>Tarasko</td>
            <td>guedi</td>
            <td className="text-center">31/01/1754</td>
            <td className="text-right">homme</td>
            <td className="text-right">Academique</td>
            <td className="text-right">youmb</td>
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
            <td>Marou</td>
            <td>ali</td>
            <td className="text-center">31/01/1754</td>
            <td className="text-right">homme</td>
            <td className="text-right">technique</td>
            <td className="text-right">kemi</td>
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
            <td>Alexia Mike</td>
            <td>brenda</td>
            <td className="text-center">31/01/1984</td>
            <td className="text-right">femmes</td>
            <td className="text-right">Bouba</td>
            <td className="text-right">decouvert</td>
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

export default Stagiaires;
