import S23Ultra from '../../assets/S23Ultra.jpg';
import Iphone14 from '../../assets/Iphone14ProMax.jpg';
import GooglePixel from '../../assets/GooglePixel7Pro.jpg';
import XiaomiNote12Pro from '../../assets/XiaomiNote12Pro.jpg';
import MotorolaRazr40Ultra from '../../assets/MotorolaRazr40Ultra.jpg';
import HuaweiP60Pro from '../../assets/HuaweiP60Pro.jpg';
import MacBookAir from '../../assets/MacBookAir.jpg';
import IpadPro from '../../assets/IpadPro.jpg';
import DellXPS15 from '../../assets/DellXPS15.jpg';
import AsusZenBookPro from '../../assets/AsusZenBookPro.jpg';
import HPEnvy from '../../assets/HPEnvy.jpg';
import SamsungGalaxyTabS8 from '../../assets/SamsungGalaxyTabS8.jpg';
import LenovoTabP12Pro from '../../assets/LenovoTabP12Pro.jpg';
import AmazonFireHD10 from '../../assets/AmazonFireHD10.jpg';
import AcerSwift3 from '../../assets/AcerSwift3.jpg';
import LenovoThinkPad from '../../assets/LenovoThinkPad.jpg';
import SonyXperiaZ4Tablet from '../../assets/SonyXperiaZ4Tablet.jpg';
import GooglePixelSlate from '../../assets/GooglePixelSlate.jpg'



const Productos = {
  telefonos: [
    {
      "id": 1,
      "modelo": "S23Ultra",
      "imagen": S23Ultra,
      "color": "Negro",
      "precio": 690000,
      "detalle": "Nuevo sin detalles, un mes de uso, se entrega completo con cargador.\nEspecificaciones técnicas:\n- Pantalla: 6.7 pulgadas Super AMOLED\n- Procesador: Exynos 990\n- RAM: 8 GB\n- Almacenamiento: 128 GB\n- Cámara principal: 108 MP\n- Batería: 4500 mAh"
    },
    {
      "id": 2,
      "modelo": "Iphone14ProMax",
      "imagen": Iphone14,
      "color": "Crema",
      "precio": 890000,
      "detalle": "Nuevo sin detalles, un mes de uso, se entrega completo con cargador.\nEspecificaciones técnicas:\n- Pantalla: 6.7 pulgadas Super Retina XDR\n- Procesador: Apple A16 Bionic\n- RAM: 8 GB\n- Almacenamiento: 256 GB\n- Cámara principal: 12 MP\n- Batería: 4000 mAh"
    },
    {
      "id": 3,
      "modelo": "GooglePixel7Pro",
      "imagen": GooglePixel,
      "color": "Negro",
      "precio": 790000,
      "detalle": "Nuevo sin detalles, un mes de uso, se entrega completo con cargador.\nEspecificaciones técnicas:\n- Pantalla: 6.3 pulgadas OLED\n- Procesador: Snapdragon 888\n- RAM: 6 GB\n- Almacenamiento: 128 GB\n- Cámara principal: 50 MP\n- Batería: 4000 mAh"
    },
    {
      "id": 4,
      "modelo": "XiaomiNote12Pro",
      "imagen": XiaomiNote12Pro,
      "color": "Negro",
      "precio": 390000,
      "detalle": "Nuevo sin detalles, un mes de uso, se entrega completo con cargador.\nEspecificaciones técnicas:\n- Pantalla: 6.5 pulgadas AMOLED\n- Procesador: Snapdragon 870\n- RAM: 8 GB\n- Almacenamiento: 128 GB\n- Cámara principal: 108 MP\n- Batería: 4500 mAh"
    },
    {
      "id": 5,
      "modelo": "MotorolaRazr40Ultra",
      "imagen": MotorolaRazr40Ultra,
      "color": "Negro",
      "precio": 690000,
      "detalle": "Nuevo sin detalles, un mes de uso, se entrega completo con cargador.\nEspecificaciones técnicas:\n- Pantalla: 6.4 pulgadas OLED\n- Procesador: Snapdragon 888\n- RAM: 12 GB\n- Almacenamiento: 256 GB\n- Cámara principal: 50 MP\n- Batería: 4000 mAh"
    },
    {
      "id": 6,
      "modelo": "HuaweiP60Pro",
      "imagen": HuaweiP60Pro,
      "color": "Negro",
      "precio": 290000,
      "detalle": "Nuevo sin detalles, un mes de uso, se entrega completo con cargador.\nEspecificaciones técnicas:\n- Pantalla: 6.2 pulgadas OLED\n- Procesador: Kirin 990\n- RAM: 8 GB\n- Almacenamiento: 128 GB\n- Cámara principal: 40 MP\n- Batería: 3800 mAh"
    },
  ],
  notebooks: [
    {
      "id": 1,
      "modelo": "MacBookAir",
      "imagen": MacBookAir,
      "color": "Gris",
      "precio": 1200000,
      "detalle": "Nuevo sin detalles, incluye cargador y funda.\nEspecificaciones técnicas:\n- Pantalla: 13.3 pulgadas Retina\n- Procesador: Intel Core i5\n- RAM: 8 GB\n- Almacenamiento: 256 GB SSD"
    },
    {
      "id": 2,
      "modelo": "DellXPS15",
      "imagen": DellXPS15,
      "color": "Plateado",
      "precio": 1500000,
      "detalle": "Nuevo sin detalles, incluye cargador y maletín.\nEspecificaciones técnicas:\n- Pantalla: 15.6 pulgadas 4K Ultra HD\n- Procesador: Intel Core i7\n- RAM: 16 GB\n- Almacenamiento: 512 GB SSD"
    },
    {
      "id": 3,
      "modelo": "AsusZenBookPro",
      "imagen": AsusZenBookPro,
      "color": "Azul",
      "precio": 1350000,
      "detalle": "Nuevo sin detalles, incluye cargador y funda.\nEspecificaciones técnicas:\n- Pantalla: 14 pulgadas Full HD\n- Procesador: AMD Ryzen 7\n- RAM: 16 GB\n- Almacenamiento: 512 GB SSD"
    },
    {
      "id": 4,
      "modelo": "HPEnvy",
      "imagen": HPEnvy,
      "color": "Gris",
      "precio": 1250000,
      "detalle": "Nuevo sin detalles, incluye cargador y mochila.\nEspecificaciones técnicas:\n- Pantalla: 13.3 pulgadas Full HD\n- Procesador: Intel Core i5\n- RAM: 8 GB\n- Almacenamiento: 256 GB SSD"
    },
    {
      "id": 5,
      "modelo": "LenovoThinkPad",
      "imagen": LenovoThinkPad,
      "color": "Negro",
      "precio": 1100000,
      "detalle": "Nuevo sin detalles, incluye cargador y maletín.\nEspecificaciones técnicas:\n- Pantalla: 14 pulgadas Full HD\n- Procesador: Intel Core i5\n- RAM: 8 GB\n- Almacenamiento: 256 GB SSD"
    },
    {
      "id": 6,
      "modelo": "AcerSwift3",
      "imagen": AcerSwift3,
      "color": "Plata",
      "precio": 900000,
      "detalle": "Nuevo sin detalles, incluye cargador y mochila.\nEspecificaciones técnicas:\n- Pantalla: 13.3 pulgadas Full HD\n- Procesador: AMD Ryzen 5\n- RAM: 8 GB\n- Almacenamiento: 512 GB SSD"
    }
  ],
  tablets: [
    {
      "id": 1,
      "modelo": "IpadPro",
      "imagen": IpadPro,
      "color": "Plata",
      "precio": 800000,
      "detalle": "Nuevo sin detalles, incluye cargador y lápiz.\nEspecificaciones técnicas:\n- Pantalla: 12.9 pulgadas Liquid Retina\n- Procesador: Apple A14 Bionic\n- RAM: 8 GB\n- Almacenamiento: 128 GB"
    },
    {
      "id": 2,
      "modelo": "SamsungGalaxyTabS8",
      "imagen": SamsungGalaxyTabS8,
      "color": "Negro",
      "precio": 950000,
      "detalle": "Nuevo sin detalles, incluye cargador y S-Pen.\nEspecificaciones técnicas:\n- Pantalla: 11 pulgadas Super AMOLED\n- Procesador: Snapdragon 870\n- RAM: 6 GB\n- Almacenamiento: 128 GB"
    },
    {
      "id": 3,
      "modelo": "LenovoTabP12Pro",
      "imagen": LenovoTabP12Pro,
      "color": "Plata",
      "precio": 750000,
      "detalle": "Nuevo sin detalles, incluye cargador y estuche.\nEspecificaciones técnicas:\n- Pantalla: 12.6 pulgadas AMOLED\n- Procesador: Snapdragon 870\n- RAM: 8 GB\n- Almacenamiento: 256 GB"
    },
    {
      "id": 4,
      "modelo": "AmazonFireHD10",
      "imagen": AmazonFireHD10,
      "color": "Negro",
      "precio": 450000,
      "detalle": "Nuevo sin detalles, incluye cargador y funda.\nEspecificaciones técnicas:\n- Pantalla: 10.1 pulgadas Full HD\n- Procesador: MediaTek MT8183\n- RAM: 2 GB\n- Almacenamiento: 32 GB"
    },
    {
      "id": 5,
      "modelo": "SonyXperiaZ4Tablet",
      "imagen": SonyXperiaZ4Tablet,
      "color": "Blanco",
      "precio": 850000,
      "detalle": "Nuevo sin detalles, incluye cargador y stylus.\nEspecificaciones técnicas:\n- Pantalla: 10.1 pulgadas 2K\n- Procesador: Qualcomm Snapdragon 810\n- RAM: 3 GB\n- Almacenamiento: 32 GB"
    },
    {
      "id": 6,
      "modelo": "GooglePixelSlate",
      "imagen": GooglePixelSlate,
      "color": "Negro",
      "precio": 900000,
      "detalle": "Nuevo sin detalles, incluye cargador y teclado.\nEspecificaciones técnicas:\n- Pantalla: 12.3 pulgadas Molecular Display\n- Procesador: Intel Core i5\n- RAM: 8 GB\n- Almacenamiento: 128 GB"
    }
  ],
};

export default Productos;