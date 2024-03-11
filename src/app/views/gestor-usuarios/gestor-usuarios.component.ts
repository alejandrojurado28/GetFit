import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestor-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestor-usuarios.component.html',
  styleUrl: './gestor-usuarios.component.css'
})
export class GestorUsuariosComponent implements OnInit{

  usuarios?: Usuario[];
  mostrarFormulario: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.fetchUsuarios();
  }

  private fetchUsuarios() {
    this.usuarioService.findAll().subscribe({
      next: value => {
        this.usuarios = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }

  muestraFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
}
