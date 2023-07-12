import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = [
        { id: 1, name: 'Toyota' },
        { id: 2, name: 'Chevrolet' },
        { id: 3, name: 'Audi' },
        { id: 4, name: 'Mazda' },
    ];

    @Get()
    getAll(): any[] {
        return this.cars;
    }

    @Get('/:id')
    getById(@Param('id') id: number): any {
        let car: any;

        car = this.cars.filter(car => car.id == id);

        return car;
    }

    @Post()
    add(@Body() car: any): any {
        let pushCar: any;

        pushCar = { id: this.cars.length + 1, name: car.name }
        this.cars.push(pushCar);

        return pushCar;

    }

    @Put()
    edit( @Body() editCar : any ): any {

        this.cars.filter(car => {
            if (car.id == editCar.id) {
                car.name = editCar.name;
            }
        });

        return this.cars;
    }

    @Delete('/:id')
    delete( @Param('id') id: number ): any[] {

        this.cars = this.cars.filter(car => car.id != id);

        return this.cars;
    }

}
