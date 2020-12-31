# Navbar by EduardoMay

Barra de menu responsive

## smoothScroll

**Importante: target-nav="..." \*requerido**

```html
<a
	class="nav__link"
	href="#inicio"
	id="nav-link"
	rel="inicio"
	target-nav="inicio"
>
	Inicio
</a>

<div id="inicio">...</div>
```

## submenus

```html
<div class="nav__submenu">
	<a class="nav__link" href="#servicios" id="test" rel="servicios">
		Servicios
	</a>

	<div class="submenu__items">
		<a href="#" class="submenu__items-link">Servicio1</a>
		<a href="#" class="submenu__items-link">Servicio2</a>
		<a href="#" class="submenu__items-link">Servicio3</a>
		<a href="#" class="submenu__items-link">Servicio4</a>
	</div>
</div>
```
