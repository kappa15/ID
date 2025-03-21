function openAnalysis(id) {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('projects1').style.display = 'none';
    document.querySelectorAll('.analysis').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.getElementById('contact').classList.add('fixed');
}

function goBack() {
    document.querySelectorAll('.analysis').forEach(sec => sec.style.display = 'none');
    document.getElementById('projects').style.display = 'block';
    document.getElementById('projects1').style.display = 'block';
    document.getElementById('contact').classList.remove('fixed');


}

function showSection(sectionId) {
    // Navegação do menu (ex: quando clicas "Análises de SO")
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    document.querySelectorAll('.analysis').forEach(sec => sec.style.display = 'none');
    
    if (sectionId === 'projects') {
        document.getElementById('projects').style.display = 'block';
        document.getElementById('projects1').style.display = 'block';

    } else {
        document.getElementById(sectionId).style.display = 'block';
    }
}
