import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from "@angular/router";
import { provideLocationMocks } from "@angular/common/testing";

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                App,
            ],
            providers: [
                provideRouter([]),
                provideLocationMocks()
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have a router outlet', () => {
        const fixture = TestBed.createComponent(App);
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('router-outlet')).not.toBeNull();
    })

    it('should render title', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello timeline-ui');
    });

    it('should have a navigation bar', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('nav')).not.toBeNull();
    })

    it('should have a link to home', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('a[routerLink=""]')).not.toBeNull();
    })

    it('should have a link to dashboard', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('a[routerLink="dashboard"]')).not.toBeNull();
    })

    it('should have a link to settings', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('a[routerLink="settings"]')).not.toBeNull();
    })
});
