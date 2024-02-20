import gears from '@assets/icons/gears.svg';
import hands from '@assets/icons/hands.svg';
import points from '@assets/icons/points2.svg';
import persons from '@assets/icons/persons2.svg';

export const REACHES_CARDS_INFO = [
   {
      id: 'productividad',
      title: 'Mejorar la productividad',
      text: 'Es nuestro objetivo analizar procesos actuales para lograr reducir costos que permitan maximizar las ganancias de la compañía enfocándonos en 4 aristas de productividad',
      image: gears,
      bgCardColor: 'var(--color-gray)',
      textCardColor: 'var(--color-black)',
      bgButtonColor: 'var(--color-black)',
      textButtonColor: 'var(--color-gray)',
      moreText: {
         items: ['Productividad de procesos.', 'Productividad del marketing.', 'Productividad en la innovación.', 'Productividad del conocimiento.']
      }
   },
   {
      id: 'profesionalizar',
      title: 'Profesionalizar su equipo de trabajo',
      text: 'Según nuestra experiencia creemos que un trabajo en los mandos medios puede resolver inconvenientes crónicos que impiden una mejora en la productividad.',
      image: hands,
      bgCardColor: 'var(--color-dark-blue)',
      textCardColor: 'var(--color-white)',
      bgButtonColor: 'var(--color-white)',
      textButtonColor: 'var(--color-dark-blue)',
      moreText: {
         title: 'Lo logramos:',
         items: ['Maximizando espacios físicos.', 'Digitalizando procesos.', 'Contando con un inventario actualizado y valorizado.', 'Mejorando el sistema de gestión.', 'Creando un sistema logístico mediante trazabilidad.']
      }
   },
   {
      id: 'reingenieria',
      title: 'Reingeniería',
      text: 'Realizamos un análisis exhaustivo de los procesos que conviven dentro de la organización, detectamos problemas, proponemos soluciones y acompañamos en la implementación, co-gestionando conjuntamente con nuestros clientes.',
      image: points,
      bgCardColor: 'var(--color-dark-gray)',
      textCardColor: 'var(--color-primary)',
      bgButtonColor: 'var(--color-primary)',
      textButtonColor: 'var(--color-white)',
      moreText: {
         description: [
            'Implementando herramientas tecnológicas de gestión de Recursos Humanos,  políticas, procedimientos, capacitaciones y organización del equipo de altos rendimientos logramos el compromiso necesario para asegurar resultados en tiempo y forma.'
         ]
      }
   },
   {
      id: 'comunicacion',
      title: 'Comunicación',
      text: 'Las empresas están conformadas por personas y los equipos son personas interactuando entre sí.',
      image: persons,
      bgCardColor: 'var(--color-primary)',
      textCardColor: 'var(--color-white)',
      bgButtonColor: 'var(--color-white)',
      textButtonColor: 'var(--color-primary)',
      moreText: {
         description: [
            'Es importante que esas personas que componen una organización aprendan a comunicarse, tengan claros sus objetivos, sepan qué pedir y a quien, conozcan todos los procesos internos, entiendan para qué hacen lo que hacen y hacia dónde va la organización.',
            'Transformamos, capacitamos y potenciamos equipos de trabajo a través de  la comunicación, procesos claros y documentados.'
         ]
      }
   }
]