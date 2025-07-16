import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const categories = [
    { id: 'all', name: 'Все услуги', icon: 'Grid3x3' },
    { id: 'beauty', name: 'Красота', icon: 'Sparkles' },
    { id: 'auto', name: 'Авто', icon: 'Car' },
    { id: 'home', name: 'Дом', icon: 'Home' },
    { id: 'health', name: 'Здоровье', icon: 'Heart' },
    { id: 'education', name: 'Образование', icon: 'GraduationCap' },
    { id: 'food', name: 'Еда', icon: 'UtensilsCrossed' },
    { id: 'sport', name: 'Спорт', icon: 'Dumbbell' },
    { id: 'finance', name: 'Финансы', icon: 'CreditCard' }
  ];

  const services = [
    {
      id: 1,
      name: 'Салон красоты "Элегант"',
      category: 'beauty',
      description: 'Стрижки, окрашивание, маникюр, педикюр',
      rating: 4.8,
      price: 'от 500 ₽',
      address: 'ул. Советская, 15',
      district: 'Центр',
      phone: '+7 (123) 456-78-90',
      hours: '9:00 - 21:00',
      image: '/img/ec675698-7d55-42d0-ae9d-75308383bf24.jpg'
    },
    {
      id: 2,
      name: 'Автосервис "Профи"',
      category: 'auto',
      description: 'Ремонт, диагностика, шиномонтаж',
      rating: 4.7,
      price: 'от 1000 ₽',
      address: 'ул. Гагарина, 42',
      district: 'Жовтневый',
      phone: '+7 (123) 456-78-91',
      hours: '8:00 - 20:00',
      image: '/img/ec675698-7d55-42d0-ae9d-75308383bf24.jpg'
    },
    {
      id: 3,
      name: 'Клиника "Здоровье+"',
      category: 'health',
      description: 'Терапия, стоматология, педиатрия',
      rating: 4.9,
      price: 'от 800 ₽',
      address: 'пр. Ленина, 78',
      district: 'Центр',
      phone: '+7 (123) 456-78-92',
      hours: '8:00 - 22:00',
      image: '/img/ec675698-7d55-42d0-ae9d-75308383bf24.jpg'
    },
    {
      id: 4,
      name: 'Ремонт бытовой техники',
      category: 'home',
      description: 'Холодильники, стиральные машины, телевизоры',
      rating: 4.6,
      price: 'от 600 ₽',
      address: 'ул. Титова, 23',
      district: 'Каменнобродский',
      phone: '+7 (123) 456-78-93',
      hours: '9:00 - 18:00',
      image: '/img/ec675698-7d55-42d0-ae9d-75308383bf24.jpg'
    },
    {
      id: 5,
      name: 'Учебный центр "Знание"',
      category: 'education',
      description: 'Курсы программирования, дизайна, языков',
      rating: 4.8,
      price: 'от 2000 ₽',
      address: 'ул. Коцюбинского, 11',
      district: 'Центр',
      phone: '+7 (123) 456-78-94',
      hours: '10:00 - 20:00',
      image: '/img/ec675698-7d55-42d0-ae9d-75308383bf24.jpg'
    },
    {
      id: 6,
      name: 'Ресторан "Традиция"',
      category: 'food',
      description: 'Русская кухня, банкеты, доставка',
      rating: 4.7,
      price: 'от 300 ₽',
      address: 'ул. Оборонная, 5',
      district: 'Центр',
      phone: '+7 (123) 456-78-95',
      hours: '11:00 - 23:00',
      image: '/img/ec675698-7d55-42d0-ae9d-75308383bf24.jpg'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBooking = (serviceName: string) => {
    setBookingData(prev => ({ ...prev, service: serviceName }));
  };

  const submitBooking = () => {
    console.log('Booking submitted:', bookingData);
    // Здесь будет отправка данных на сервер
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setBookingData({ name: '', phone: '', service: '', date: '', time: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Услуги Луганска</h1>
            </div>
            <Button variant="outline" className="flex items-center">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Контакты
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Найдите лучшие услуги в Луганске
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Удобный поиск, онлайн-запись и проверенные специалисты
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Поиск услуг..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Категории услуг</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center"
              >
                <Icon name={category.icon} className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{service.name}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </div>
                  <div className="flex items-center ml-2">
                    <Icon name="Star" className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Цена:</span>
                    <span className="font-medium text-blue-600">{service.price}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="MapPin" className="h-4 w-4 mr-1" />
                    {service.address}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Clock" className="h-4 w-4 mr-1" />
                    {service.hours}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{service.district}</Badge>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${service.phone}`}>
                          <Icon name="Phone" className="h-4 w-4" />
                        </a>
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" onClick={() => handleBooking(service.name)}>
                            <Icon name="Calendar" className="h-4 w-4 mr-2" />
                            Записаться
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Онлайн-запись</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Имя</Label>
                              <Input
                                id="name"
                                value={bookingData.name}
                                onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                                placeholder="Ваше имя"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Телефон</Label>
                              <Input
                                id="phone"
                                value={bookingData.phone}
                                onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                                placeholder="+7 (123) 456-78-90"
                              />
                            </div>
                            <div>
                              <Label htmlFor="service">Услуга</Label>
                              <Input
                                id="service"
                                value={bookingData.service}
                                onChange={(e) => setBookingData(prev => ({ ...prev, service: e.target.value }))}
                                placeholder="Название услуги"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="date">Дата</Label>
                                <Input
                                  id="date"
                                  type="date"
                                  value={bookingData.date}
                                  onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))}
                                />
                              </div>
                              <div>
                                <Label htmlFor="time">Время</Label>
                                <Select value={bookingData.time} onValueChange={(value) => setBookingData(prev => ({ ...prev, time: value }))}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Выберите время" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="09:00">09:00</SelectItem>
                                    <SelectItem value="10:00">10:00</SelectItem>
                                    <SelectItem value="11:00">11:00</SelectItem>
                                    <SelectItem value="12:00">12:00</SelectItem>
                                    <SelectItem value="13:00">13:00</SelectItem>
                                    <SelectItem value="14:00">14:00</SelectItem>
                                    <SelectItem value="15:00">15:00</SelectItem>
                                    <SelectItem value="16:00">16:00</SelectItem>
                                    <SelectItem value="17:00">17:00</SelectItem>
                                    <SelectItem value="18:00">18:00</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="message">Сообщение</Label>
                              <Textarea
                                id="message"
                                value={bookingData.message}
                                onChange={(e) => setBookingData(prev => ({ ...prev, message: e.target.value }))}
                                placeholder="Дополнительная информация"
                              />
                            </div>
                            <Button onClick={submitBooking} className="w-full">
                              Отправить заявку
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t">
          <div className="text-center text-gray-600">
            <p>© 2024 Услуги Луганска. Все права защищены.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Button variant="ghost" size="sm">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                info@lugansk-services.com
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                +7 (123) 456-78-90
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;