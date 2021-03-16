import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
} from '@angular/animations';


export const fader = trigger('routeAnimations', [
        transition('*=> isLeft', slideTo('left')),
        transition('*=> isRight', slideTo('right')),
        transition('isRight=> *', slideTo('left')),
        transition('isLeft=> *', slideTo('right'))
]);



function slideTo(direction: any): Array<any> {
    const optional = {optional: true};
    return [
        query(':enter,:leave', [
            style({
                position: 'absolute',
                [direction]: '-40%',
                width: '90%'
            })
        ], optional),
        query(':enter', [
            style({
                position: 'absolute',
                [direction]: '10%',
                width: '90%',

            })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({
                  [direction]: '0%',
                    opacity: '0'}
                    ))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({[direction]: '0',
                }))
            ], optional)
        ])
    ];
}
