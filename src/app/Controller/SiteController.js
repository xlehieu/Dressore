//[GET] /
export function home(req, res) {
    const banner = {
        url: 'https://static.dchic.vn/uploads/media/2024/10/web%20banner-596129851.png',
    };
    res.render('home', { layout: 'main', banner });
    
}
// GET /login
export function login(req, res) {
    res.render('site/login', { layout: 'sub' });
}
